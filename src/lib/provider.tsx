// "use client";

// import React, { useState } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { httpBatchLink } from "@trpc/client";
// import { trcp } from "./trpc";

// export default function Provider({ children }: { children: React.ReactNode }) {
//   const [queryClient] = useState(() => new QueryClient());
//   const [trcpClient] = useState(() => {
//     return trcp.createClient({
//       links: [
//         httpBatchLink({
//           url: "http://localhost:5000/trcp",
//         }),
//       ],
//     });
//   });

//   return (
//     <trcp.Provider queryClient={queryClient} client={trcpClient}>
//       <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//     </trcp.Provider>
//   );
// }
