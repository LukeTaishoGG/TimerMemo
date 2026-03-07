import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { DELEATE_TIMES, DEFAULT_DELETE_TIME } from "./costants"

export const MobileSelect = () => {
  return (
    <NativeSelect className="w-[180px]" defaultValue={DEFAULT_DELETE_TIME}>
      {DELEATE_TIMES.map((item) => (
        <NativeSelectOption key={item.value} value={item.value}>
          {item.label}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  )
}
