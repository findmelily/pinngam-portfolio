import {
  Tilt,
  TiltContent,
} from "@/components/animate-ui/primitives/effects/tilt";

interface StatusProps {
  text: string;
  isAvailable: boolean;
  isTilted: boolean;
}

const Status = ({ text, isAvailable, isTilted }: StatusProps) => {
  const statusBadge = (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border ${
        isAvailable ? "border-emerald-500/50" : "border-red-500/50"
      } backdrop-blur-lg mb-4 animate-fade-in-up pointer-events-auto`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isAvailable ? "bg-emerald-500" : "bg-red-500"
        } animate-pulse`}
      ></span>
      <span className="font-semibold text-slate-500 tracking-wide uppercase">
        {text}
      </span>
    </div>
  );

  return (
    <div>
      {isTilted ? (
        <Tilt>
          <TiltContent>{statusBadge}</TiltContent>
        </Tilt>
      ) : (
        statusBadge
      )}
    </div>
  );
};

export default Status;
