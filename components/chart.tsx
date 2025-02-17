// "use client";

// import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

// import { ChartConfig, ChartContainer } from "@/components/ui/chart";
// import { useEffect, useState } from "react";

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(220.9 39.3% 11%)",
//   },
// } satisfies ChartConfig;

// export default function Chart() {
//   const [data, setData] = useState(null);
//   const [isLoading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   fetch(
//   //     "https://api.geckoterminal.com/api/v2/networks/base/pools/0x98de3cb635775c1dbc8a014c3bffa0de303a62186d19f5eac0ddcb79fdd1b63d/ohlcv/hour?aggregate=1&limit=168&currency=token"
//   //   )
//   //     .then((res) => res.json())
//   //     .then(({ data: raw_data }) => {
//   //       const data = raw_data.attributes?.ohlcv_list.map(
//   //         ([open, high, low, close, volume]: number[], index: number) => ({
//   //           index,
//   //           open,
//   //           high,
//   //           low,
//   //           close,
//   //           volume,
//   //         })
//   //       );
//   //       setData(data);
//   //       setLoading(false);
//   //     });
//   // }, []);

//   if (isLoading)
//     return (
//       <p className="font-mono text-sm h-[200px] flex justify-center items-center">
//         loading...
//       </p>
//     );
//   if (!data) return <p className="font-mono text-sm">no chart data</p>;

//   return (
//     <ChartContainer config={chartConfig} className="h-[200px] aspect-auto">
//       <LineChart
//         accessibilityLayer
//         data={data}
//         margin={{
//           left: 4,
//           right: 4,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 9" />

//         <XAxis
//           dataKey="i"
//           tickLine={false}
//           axisLine={false}
//           tickMargin={1}
//           tickFormatter={(value) => value.slice(0, 3)}
//         />
//         {/* <ChartTooltip
//           cursor={false}
//           content={<ChartTooltipContent hideLabel />}
//         /> */}
//         <Line
//           dataKey="close"
//           type="step"
//           stroke="var(--color-desktop)"
//           strokeWidth={1}
//           dot={false}
//         />
//       </LineChart>
//     </ChartContainer>
//   );
// }
