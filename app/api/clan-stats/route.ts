import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('clan_stats')
      .select('*')

    if (error) throw error

    return NextResponse.json({ success: true, data })
  } catch {
    return NextResponse.json({ success: false, data: [] })
  }
}
