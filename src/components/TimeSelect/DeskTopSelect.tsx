import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DELEATE_TIMES, DEFAULT_DELETE_TIME } from "./costants"

export const DeskTopSelect = () => {
  return (
    <Select defaultValue={DEFAULT_DELETE_TIME}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {DELEATE_TIMES.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
