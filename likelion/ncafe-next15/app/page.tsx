import { createClient } from "@/utils/supabase/server";

export default async function Instruments() {
  const supabase = await createClient();
  const { data: menu } = await supabase.from("menu").select();
  console.log("menu: ", menu);

  return <pre>{JSON.stringify(menu, null, 2)}</pre>;
}
