import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data } = await supabase.from("posts").select();
    console.log("data => ", data);
    return {
        posts: data ?? [],
    };
}