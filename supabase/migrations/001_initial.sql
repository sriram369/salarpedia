-- SalaarPedia: Clan Members table
CREATE TABLE IF NOT EXISTS clan_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  clan TEXT NOT NULL CHECK (clan IN ('MANNAR', 'SHOURYAANGA', 'GHANIYAAR')),
  title TEXT NOT NULL,
  joined_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for clan filtering
CREATE INDEX IF NOT EXISTS idx_clan_members_clan ON clan_members(clan);

-- Stats view
CREATE OR REPLACE VIEW clan_stats AS
SELECT
  clan,
  COUNT(*) as member_count
FROM clan_members
GROUP BY clan;
