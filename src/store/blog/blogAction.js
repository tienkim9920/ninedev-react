import blogType from "./blogType";

export const setBlog = (data) => {
    return {
        type: blogType.SETBLOG,
        data
    }
};

export const createBlog = (data) => {
    return {
        type: blogType.CREATE_BLOG,
        data
    }
};

export const deleteBlog = (id) => {
    return {
        type: blogType.DELETE_BLOG,
        data: id
    }
};