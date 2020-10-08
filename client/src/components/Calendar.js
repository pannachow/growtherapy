import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  back: {
    float: 'left',
    marginLeft: '2px',
    marginTop: '2px',
  },
  title: {
    marginTop: '8px',
    textAlign: 'center',
  },
  forward: {
    float: 'right',
    marginRight: '2px',
    marginTop: '2px',
  }
});

export default function Calendar() {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());

  const calendar = getCalendar(date.getFullYear(), date.getMonth());

  return (
    <TableContainer component={Paper} style={{ width: '500px' }}>
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
            <TableCell>Mon</TableCell>
            <TableCell>Tue</TableCell>
            <TableCell>Wed</TableCell>
            <TableCell>Thu</TableCell>
            <TableCell>Fri</TableCell>
            <TableCell>Sat</TableCell>
            <TableCell>Sun</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from(calendar.rows.entries()).map(([i, row]) => (
            <TableRow key={i}>
              {Array.from(row.entries()).map(([j, cell]) => (
                <TableCell key={j}>{cell.date}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
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
