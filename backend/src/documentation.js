export const userDoc = [
  { method: `POST`, command: `/tryLogin` },
  { method: `POST`, command: `/finalLogin` },
  {
    method: `POST`,
    command: `/chat/general`,
    info: `Main general chat message`,
  },
];
export const teamsDoc = [
  { method: `GET`, command: `/teams`, info: `Search teams` },
  { method: `POST`, command: `/teams/createTeam`, info: `Create a team` },
  { method: `POST`, command: `/teams/apply`, info: `Apply for a any team` },
  {
    method: `POST`,
    command: `/teams/approvePlayer`,
    info: `Approve player to the team`,
  },
  { method: `POST`, command: `/teams/chatMsg`, info: `Chat team` },
];
