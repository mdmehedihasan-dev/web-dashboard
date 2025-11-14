export const DEMO = {
  "/courier-request/get-courier-stats": {
    summaryStats: {
      activeShipments: 3,
      successDeliveries: 25,
      revenue: 1240,
    },
    monthlyStats: [
      { month: "Jan", revenue: 100 },
      { month: "Feb", revenue: 120 },
      { month: "Mar", revenue: 90 },
      { month: "Apr", revenue: 140 },
      { month: "May", revenue: 110 },
      { month: "Jun", revenue: 180 },
      { month: "Jul", revenue: 160 },
      { month: "Aug", revenue: 170 },
      { month: "Sep", revenue: 150 },
      { month: "Oct", revenue: 130 },
      { month: "Nov", revenue: 190 },
      { month: "Dec", revenue: 200 },
    ],
    activeShipments: [
      { _id: "s1", from: "Demo A", to: "Demo B", price: 25, status: "in-progress" },
      { _id: "s2", from: "Demo C", to: "Demo D", price: 35, status: "in-progress" },
    ],
  },
  "/courier-request/get-pending-requests": [],
  "/courier-request/get-courier-shipments": [],
  "/courier-request/get-user-requests": { requests: [], totalJobs: 0 },
  "/reviews": [],
  "/courier-routes/date": { routes: [] },

  // Auth endpoints (no-op)
  "/user/login": { success: true },
  "/courier/login": { success: true },
  "/user/register": { success: true },
  "/courier/register": { success: true },

  // Chat
  "/chat/conversations": [
    {
      _id: "demo-conv-1",
      otherParticipant: { firstName: "Demo User", profileImage: "" },
      lastMessage: { content: "Welcome to the demo!", createdAt: new Date().toISOString() },
    },
    {
      _id: "demo-conv-2",
      otherParticipant: { firstName: "Alex", profileImage: "" },
      lastMessage: { content: "Let’s schedule pickup tomorrow.", createdAt: new Date().toISOString() },
    },
    {
      _id: "demo-conv-3",
      otherParticipant: { firstName: "Maria", profileImage: "" },
      lastMessage: { content: "Thanks for the update!", createdAt: new Date().toISOString() },
    },
  ],
  "/chat/conversations/demo-conv-1/messages": [
    {
      _id: "m1",
      content: "Welcome to the demo!",
      sender: { _id: "u2", firstName: "Demo User" },
      createdAt: new Date().toISOString(),
      conversationId: "demo-conv-1",
    },
  ],
  "/chat/conversations/demo-conv-2/messages": [
    {
      _id: "m2-1",
      content: "Hey, can we schedule a pickup for tomorrow morning?",
      sender: { _id: "u3", firstName: "Alex" },
      createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
      conversationId: "demo-conv-2",
    },
    {
      _id: "m2-2",
      content: "Sure! 10 AM works?",
      sender: { _id: "u1", firstName: "You" },
      createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
      conversationId: "demo-conv-2",
    },
  ],
  "/chat/conversations/demo-conv-3/messages": [
    {
      _id: "m3-1",
      content: "Package delivered at reception.",
      sender: { _id: "u1", firstName: "You" },
      createdAt: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
      conversationId: "demo-conv-3",
    },
    {
      _id: "m3-2",
      content: "Thanks for the update!",
      sender: { _id: "u4", firstName: "Maria" },
      createdAt: new Date(Date.now() - 1000 * 60 * 85).toISOString(),
      conversationId: "demo-conv-3",
    },
  ],
};

export function getDemoResponse(path) {
  // Normalize path to strip querystrings
  try {
    const u = new URL(path, typeof window !== 'undefined' ? window.location.origin : 'http://localhost');
    return DEMO[u.pathname] ?? [];
  } catch {
    // path might already be a relative path
    const pathname = (path || '').split('?')[0];
    return DEMO[pathname] ?? [];
  }
}
