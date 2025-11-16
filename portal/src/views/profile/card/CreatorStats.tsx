"use client";

const StatItem = ({
  value,
  label,
}: {
  value: number | string;
  label: string;
}) => (
  <div className="profile-card-stats-item">
    <span className="profile-card-stats-item-value">{value}</span>
    <span className="profile-card-stats-item-label">{label}</span>
  </div>
);

export default function CreatorStats({
  stats,
}: {
  stats: {
    creations: number;
    followers: number | string;
    following: number;
    awards: number;
  };
}) {
  return (
    <div className="profile-card-stats">
      <StatItem value={stats.creations} label="Creations" />
      <StatItem value={stats.followers} label="Followers" />
      <StatItem value={stats.following} label="Following" />
      <StatItem value={stats.awards} label="Awards" />
    </div>
  );
}
