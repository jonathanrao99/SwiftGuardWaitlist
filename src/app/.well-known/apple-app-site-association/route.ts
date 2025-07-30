const appleTeamId = process.env.APPLE_TEAM_ID;
const bundleId = process.env.NEXT_PUBLIC_BUNDLE_IDENTIFIER;
const appID = `${appleTeamId}.${bundleId}`;

export async function GET() {
  return Response.json(
    {
      applinks: {
        apps: [],
        details: [

        ],
      },
      webcredentials: {
        apps: [appID],
      },
      activitycontinuation: {
        apps: [appID],
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    },
  );
}
