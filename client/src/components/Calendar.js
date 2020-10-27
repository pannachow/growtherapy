import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  back: {
    float: "left",
    marginLeft: "2px",
    marginTop: "2px",
  },
  title: {
    marginTop: "8px",
    textAlign: "center",
  },
  forward: {
    float: "right",
    marginRight: "2px",
    marginTop: "2px",
  },
  circle: {
    backgroundColor: theme.palette.secondary.main,
    width: 21,
    height: 21,
    display: "inline-block",
    textAlign: "center",
    borderRadius: "50%",
  },
}));

export default function Calendar(props) {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());

  const schedule = props.schedule;
  const calendar = getCalendar(date.getFullYear(), date.getMonth());

  function getCellContent(day) {
    const start = getDaysSinceEpoch(schedule.start);
    const current = getDaysSinceEpoch(new Date(date.getFullYear(), date.getMonth(), day));

    let text = null;
    if (current >= start && (current - start) % schedule.interval === 0) {
      text = schedule.text;
    }

    if (text) {
      return (
        <Tooltip placement="top" title={text}>
          <div className={classes.circle}>
            <span style={{ color: "white" }}>{day}</span>
          </div>
        </Tooltip>
      );
    } else {
      return day;
    }
  }

  return (
    <TableContainer component={Paper} style={{ width: "500px" }}>
      <IconButton size="medium" className={classes.back} onClick={() => setDate(previousMonth(date))}>
        <ArrowBackIcon />
      </IconButton>
      <IconButton size="medium" className={classes.forward} onClick={() => setDate(nextMonth(date))}>
        <ArrowForwardIcon />
      </IconButton>
      <Typography className={classes.title} variant="h5">{calendar.dateString}</Typography>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Mon</TableCell>
            <TableCell align="center">Tue</TableCell>
            <TableCell align="center">Wed</TableCell>
            <TableCell align="center">Thu</TableCell>
            <TableCell align="center">Fri</TableCell>
            <TableCell align="center">Sat</TableCell>
            <TableCell align="center">Sun</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from(calendar.rows.entries()).map(([i, row]) => (
            <TableRow key={i}>
              {Array.from(row.entries()).map(([j, cell]) => (
                <TableCell align="center" key={j}>
                  {getCellContent(cell.date)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

// https://stackoverflow.com/a/12739212/1466456
function getDaysSinceEpoch(date) {
  return Math.floor(date / 8.64e7);
}

function getCalendar(year, month) {
  const daysInMonth = getDaysInMonth(year, month);
  const start = new Date(year, month, 1);
  const emptyCellsInStart = getDay(start);
  const end = new Date(year, month, daysInMonth);
  const emptyCellsInEnd = 6 - getDay(end);
  const numberOfCells = emptyCellsInStart + daysInMonth + emptyCellsInEnd;
  const numberOfWeeks = numberOfCells / 7;

  const rows = [];
  let current = 1;
  for (let i = 0; i < numberOfWeeks; i++) {
    const row = [];
    if (i === 0) {
      for (let j = 0; j < emptyCellsInStart; j++) {
        row.push({});
      }
    }

    while (row.length < 7 && current <= daysInMonth) {
      row.push({ date: current });
      current++;
    }

    if (i === numberOfWeeks - 1) {
      for (let j = 0; j < emptyCellsInEnd; j++) {
        row.push({});
      }
    }
    rows.push(row);
  }

  return {
    dateString: `${getMonthName(start.getMonth())} ${start.getFullYear()}`,
    rows,
  };
}

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
};

// Get day of week where 0 => Monday.
function getDay(date) {
  // In built-in getDay, 0 => Sunday.
  const day = date.getDay() - 1;
  return day === -1 ? 6 : day;
}

function getMonthName(month) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"
  ];
  return monthNames[month];
}

function previousMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}

function nextMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 1);
}
