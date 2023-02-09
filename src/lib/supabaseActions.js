import { supabase } from "$lib/supabaseClient";

/**
 * @param {string} [value]
 */
export async function addPost(value) {
    try {
        await supabase
            .from('posts')
            .insert({ text: value })
            .select()
            .single();
    } catch (error) {
        console.log("error add => ", error);
    }

};
/** @param {number} id*/
export const deletePost = async (id) => {
    try {
        await supabase.from("posts").delete().eq("id", id);
        console.log(id)
    } catch (error) {
        console.log("error del =>", error);
    }
};
/**
 * @param {number} id
 * @param {string} text
 */
export async function updatePost(id, text) {
    try {
        const post = {
            id: id,
            text: text,
            update_at: new Date(),
        }
        await supabase.from('posts').upsert(post)

    } catch (error) {
        console.log("error upd => ", error);
    }
}

