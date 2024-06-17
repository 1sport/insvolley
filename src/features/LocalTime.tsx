'use client'

import { Suspense } from 'react'
import { useHydration } from '@/shared/hooks/useHydration'
import {format} from "@/shared/utils/date";

export function LocalTime({ date }: { date: Date | string | number }) {
  const hydrated = useHydration()
  return (
    <Suspense key={hydrated ? 'local' : 'utc'}>
      <time dateTime={new Date(date).toISOString()}>
        {format(new Date(date)).toLocaleString()}
        {hydrated ? '' : ' (UTC)'}
      </time>
    </Suspense>
  )
}