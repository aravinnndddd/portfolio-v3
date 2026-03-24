import React, { useEffect, useState } from "react";
import { Terminal, Gamepad2, Music, Code2, Monitor } from "lucide-react";

const USER_ID = "754961569858846770";
const API_URL = `https://discord-echo-u4ak.onrender.com/api/activities/${USER_ID}`;

interface Activity {
  name: string;
  type: "Playing" | "Listening" | "Custom" | "Streaming";
  details?: string;
  state?: string;
  platform?: string;
  startedAt?: string;
  assets?: {
    largeImage?: string | null;
    smallImage?: string | null;
    spotifyAlbumArt?: string | null;
    largeText?: string | null;
    smallText?: string | null;
  };
}

interface Resp {
  userId: string;
  username: string;
  avathar: string;
  status: "online" | "idle" | "dnd";
  activities: Activity[];
}

const DcStatus: React.FC = () => {
  const [data, setData] = useState<Resp | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        console.error("API error", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "idle":
        return "bg-yellow-400";
      case "dnd":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "Active & Available";
      case "idle":
        return "Away for a bit";
      case "dnd":
        return "Deep Work Mode";
      default:
        return "Offline";
    }
  };

  const getElapsedTime = (start?: string) => {
    if (!start) return "";
    const diff = Date.now() - new Date(start).getTime();
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return h > 0 ? `${h}h ${m}m ${s}s` : `${m}m ${s}s`;
  };

  const getActivityIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("valorant") || n.includes("league") || n.includes("game"))
      return <Gamepad2 size={16} className="text-red-400" />;
    if (n.includes("spotify") || n.includes("music"))
      return <Music size={16} className="text-green-400" />;
    if (n.includes("code") || n.includes("vs code"))
      return <Code2 size={16} className="text-blue-400" />;
    return <Monitor size={16} className="text-purple-400" />;
  };

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center p-6 glass-dark rounded-3xl animate-pulse">
        <div className="w-12 h-12 bg-white/10 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md md:max-w-lg mx-0 md:mx-auto lg:mx-0">
      <div className="glass-dark p-4 md:p-6 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 shadow-2xl backdrop-blur-2xl">
        {/* Profile Section */}
        <div className="flex items-center gap-3 md:gap-5">
          <div className="relative group">
            <div
              className={`absolute -inset-0.5 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 ${getStatusColor(data.status)}`}
            ></div>
            <div className="relative p-0.5 md:p-1 bg-black rounded-full overflow-hidden">
              <img
                src={data.avathar}
                alt={data.username}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
              />
              <div
                className={`absolute bottom-0.5 right-0.5 w-3 h-3 md:w-4 md:h-4 border-2 border-black rounded-full ${getStatusColor(data.status)}`}
              ></div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-sm md:text-lg font-bold text-white flex items-center gap-2">
              @{data.username}
              <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-[8px] md:text-[10px] font-mono text-gray-400 border border-white/10">
                LIVE
              </span>
            </h3>
            <p className="text-[10px] md:text-xs text-gray-400 font-medium tracking-wide first-letter:uppercase">
              {getStatusText(data.status)}
            </p>
          </div>
        </div>

        {/* Activities Section */}
        <div className="mt-6 flex flex-col gap-3">
          {data.activities.length === 0 ? (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
              <Terminal size={18} className="text-gray-500" />
              <code className="text-xs text-gray-500">
                console.log("Peacefully Idle");
              </code>
            </div>
          ) : (
            data.activities.map((activity, index) => (
              <div
                key={index}
                className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/5 flex-shrink-0">
                  <img
                    src={
                      activity.name.toLowerCase().includes("spotify") &&
                      activity.assets?.spotifyAlbumArt
                        ? activity.assets.spotifyAlbumArt
                        : activity.assets?.largeImage ||
                          "/api/placeholder/48/48"
                    }
                    alt={activity.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/api/placeholder/48/48";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest opacity-80">
                      {activity.type}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/10"></span>
                    {activity.startedAt && (
                      <span className="text-[10px] text-gray-500 font-mono">
                        {getElapsedTime(activity.startedAt)}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-bold text-white truncate flex items-center gap-1.5 mt-0.5">
                    {getActivityIcon(activity.name)}
                    {activity.name}
                  </p>
                  <p className="text-[11px] text-gray-400 truncate mt-0.5 font-medium leading-relaxed">
                    {activity.details || activity.state || "Active"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DcStatus;
