export default {
  HOST: "127.0.0.1",
  PORT: 27017,
  DB: "ValoCoach",
  ROLES: ["admin", "moderator", "user", "manager", "coach"],
  orderStatusEnum: [
    "Pending",
    "Approved",
    "Cancelled",
    "Completed",
    "Rescheduled",
    "In Progress",
  ],
};
