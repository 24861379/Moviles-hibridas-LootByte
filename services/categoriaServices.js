import { supabase } from "../lib/supabase";

export async function cargarCategorias() {
    const { data, error } = await supabase
        .from("categoria")
        .select("*");
    if (error) {
        return [];
    }
    return data;
}