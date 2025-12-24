"use client";

import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function getTimeIn12HourFormat(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

function getStyles(id: string, selectedIds: readonly string[], theme: Theme) {
  return {
    fontWeight:
      selectedIds.indexOf(id) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type Props = {
  schedules?: any[];
  selectedScheduleIds?: string[];
  setSelectedScheduleIds: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function MultipleSelectFieldChip({
  schedules = [],
  selectedScheduleIds = [],
  setSelectedScheduleIds,
}: Props) {
  const theme = useTheme();

  const handleChange = (
    event: SelectChangeEvent<typeof selectedScheduleIds>
  ) => {
    const {
      target: { value },
    } = event;

    setSelectedScheduleIds(
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl sx={{ width: 300 }} fullWidth>
      <InputLabel id="multiple-chip-label">Schedules</InputLabel>

      <Select
        labelId="multiple-chip-label"
        multiple
        value={selectedScheduleIds}
        onChange={handleChange}
        input={<OutlinedInput label="Schedules" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((id) => {
              const schedule = schedules.find((s) => s.id === id);

              if (!schedule) return null;

              return (
                <Chip
                  key={id}
                  label={`${getTimeIn12HourFormat(
                    schedule.startDate
                  )} - ${getTimeIn12HourFormat(schedule.endDate)}`}
                />
              );
            })}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {schedules.length === 0 ? (
          <MenuItem disabled>No schedules available</MenuItem>
        ) : (
          schedules.map((schedule) => (
            <MenuItem
              key={schedule.id}
              value={schedule.id}
              style={getStyles(schedule.id, selectedScheduleIds, theme)}
            >
              {`${getTimeIn12HourFormat(
                schedule.startDate
              )} - ${getTimeIn12HourFormat(schedule.endDate)}`}
            </MenuItem>
          ))
        )}
      </Select>
    </FormControl>
  );
}
