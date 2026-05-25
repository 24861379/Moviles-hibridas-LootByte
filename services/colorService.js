import { supabase } from "../lib/supabase";

export async function cargarColores() {

    const { data, error } = await supabase
        .from("color")
        .select("*");

    if (error) {
        return [];
    }
    return data;
}