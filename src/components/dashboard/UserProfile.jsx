import Card from "../common/Card";
import "./UserProfile.css";

export default function UserProfile({ user }) {
  if (!user) return null;

  return (
    <Card className="user-profile">
      <div className="profile-header">
        {user.profile_img && (
          <img src={user.profile_img} alt={user.first_name} className="profile-image" />
        )}
        <div className="profile-info">
          <h2>Welcome back, {user.first_name}! 👋</h2>
          <p className="profile-name">{user.first_name} {user.last_name}</p>
          <p className="profile-username">@{user.user_name}</p>
        </div>
      </div>
    </Card>
  );
}
