import { Box, Typography } from "@mui/material";
import { clientData } from "../../Components/Data/clientData";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Timer = ({ initialTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const parseTime = (timeString) => {
      const [months, days] = timeString.split(" months ");
      return {
        months: parseInt(months),
        days: parseInt(days.split(" days")[0]),
      };
    };

    const targetDate = new Date(initialTime);
    const currentDate = new Date();

    const timeDifferenceInMilliseconds = targetDate - currentDate;
    const timeDifferenceInSeconds = timeDifferenceInMilliseconds / 1000;

    let months = Math.floor(timeDifferenceInSeconds / (60 * 60 * 24 * 30));
    let days = Math.floor(
      (timeDifferenceInSeconds % (60 * 60 * 24 * 30)) / (60 * 60 * 24)
    );

    const timer = setInterval(() => {
      if (months > 0 || days > 0) {
        if (days === 0 && months > 0) {
          months -= 1;
          days = 30;
        }
        if (days > 0) {
          days -= 1;
        }

        setTimeRemaining(`${months} months ${days} days`);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTime]);

  return (
    <Box>
      <Typography>Time Remaining: {timeRemaining}</Typography>
    </Box>
  );
};

export default function ClientData() {
  return (
    <Box
      sx={{
        backgroundColor: "#1C1E36;",
        width: "100%",
        height: { md: "100vh", xs: "100%" },
        color: "white",
      }}
    >
      <Typography
        sx={{
          fontSize: 40,
          display: "flex",
          width: "100%",
          fontWeight: "bold",
          height: 150,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Client Details
      </Typography>
      <Box sx={{ width: "90%", margin: "auto" }}>
        {clientData.map((client, index) => (
          <Box
            sx={{
              display: "flex",
              border: "2px solid white",
              padding: 2,
              color: "white",
              display: { md: "flex", xs: "block" },
              justifyContent: "space-between",
            }}
            key={index}
          >
            <Box
              sx={{
                display: { md: "flex", xs: "block" },
                gap: 5,
                width: { md: "60%", xs: "100%" },
              }}
            >
              <Typography fontSize={17}>Name: {client.Name}</Typography>
              <Typography fontSize={17}>Address: {client.Address}</Typography>
            </Box>
            <Box sx={{ mt: { md: 0, xs: 3 } }}>
              <Timer initialTime={client.Time} />
            </Box>
          </Box>
        ))}
      </Box>
      <Link href="/">
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: 120,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "#fa4729",
              color: "white",
              padding: 10,
              fontSize: 20,
              fontWeight: "bold",
              borderRadius: 10,
            }}
          >
            Go Back
          </button>
        </Box>
      </Link>
    </Box>
  );
}
