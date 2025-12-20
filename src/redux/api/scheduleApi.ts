import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "@/types/common";
import { ISchedule } from "@/types/doctor/schedule";

export const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSchedule: build.mutation({
      query: (data) => ({
        url: "/schedule",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
    getAllSchedules: build.query<
      { schedules: ISchedule[]; meta: IMeta },
      Record<string, any>
    >({
      query: (arg) => ({
        url: "/schedule",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: ISchedule[], meta: IMeta) => ({
        schedules: response,
        meta,
      }),
      providesTags: [tagTypes.schedule],
    }),

    deleteSchedule: build.mutation({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
  }),
});

export const {
  useCreateScheduleMutation,
  useGetAllSchedulesQuery,
  useDeleteScheduleMutation,
} = scheduleApi;
