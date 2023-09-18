import { Card } from "@mui/material";
import React from "react";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  // Legend,
} from "recharts";

import { useTheme } from "@emotion/react";

const data = [
  {
    month: "Jan",
    PaidReach: 0,
    OrganicReach: 5,
    vu: 20,
  },
  {
    month: "Feb",

    PaidReach: 10,
    OrganicReach: 5,
    vu: 10,
  },
  {
    month: "Mar",

    PaidReach: 5,
    OrganicReach: 10,
    vu: 5,
  },
  {
    month: "Apr",

    PaidReach: 10,
    OrganicReach: 6,
  },
  {
    month: "May",
    PaidReach: 8,
    OrganicReach: 5,
  },
  {
    month: "Jun",

    PaidReach: 10,
    OrganicReach: 9,
  },
  {
    month: "july",
    PaidReach: 15,
    OrganicReach: 20,
  },
  {
    month: "Aug",
    PaidReach: 20,
    OrganicReach: 15,
  },
  {
    month: "Sep",
    PaidReach: 15,
    OrganicReach: 20,
  },
  {
    month: "Oct",
   
  },
  {
    month: "Nov",
   
  },
  {
    month: "Dec",
   
  },


];

export default function Chart() {
  const theme = useTheme();
  return (
    <Card sx={{ px:2,py:3,borderRadius:'15px',boxShadow:"0px 2px 19px 0px rgba(217, 216, 255, 0.83)"}}>
    <ResponsiveContainer width={'100%'} height={300}>
      <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 5 }} >
        <defs>
          <linearGradient
            id="colorSale"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          ></linearGradient>
          <linearGradient
            id="colorReach"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          ></linearGradient>
          <linearGradient
            id="ColorOrganicReach"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          ></linearGradient>
        </defs>
        <XAxis
     
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ dx: 2, dy: 10 }}
        />
        <YAxis
        
          dataKey="vu"
          axisLine={false}
          tickLine={false}
          // tickFormatter={(value) => `${value}K`}
          tickFormatter={(value) => (value === 0 ? "0" : `${value}K`)}
          tick={{ dx: -20, dy: -2 }}
        />

        <CartesianGrid vertical={false} strokeDasharray="3 3" />

        <Tooltip
          contentStyle={{
            fontSize: "14px",
            borderRadius: "8px",
            height: "122px",
            width: "150px",
            color: "white",
            background: "#081A51",
          }}
          itemStyle={{ fontWeight: "600" }}
        />

        <Area
          type="monotone"
          dataKey="Reach"
          stroke="#30D987"
          fillOpacity={0.5}
          fill="url(#colorReach)"
          dot={{ fill: "#30D987" }}
        />
        <Area
          type="monotone"
          dataKey="PaidReach"
          stroke="#017EFA"
          fillOpacity={0.4}
          fill="url(#colorSale)"
          dot={{ fill: "#017EFA" }}
        />
        <Area
          type="monotone"
          dataKey="OrganicReach"
          stroke="#FD1F9B"
          fillOpacity={0.4}
          fill="url(#ColorOrganicReach)"
          dot={{ fill: "#FD1F9B" }}
        />
      </AreaChart>
    </ResponsiveContainer>
    </Card>
  );
}
