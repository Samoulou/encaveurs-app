import { EventStatus } from "./wineEventsType"

export type WineEvent = {
  id?: string,
  title: string,
  description: string,
  price: number, 
  location: string,
  category: EventStatus,
  date: Date
}
