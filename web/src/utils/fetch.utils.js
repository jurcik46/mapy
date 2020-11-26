export const apiLinkRoot = process.env.REACT_APP_API_LINK


export const apiLinkPathOrders = {
    orders: "/orders",
}

export const httpJsonHeader = () => {
    let header = {
        "Accept": "application/json",
        "Content-type": "application/json",
    }
    return header;
}

export const httpRequestJson = {
    get: {
        method: "GET",
        headers: httpJsonHeader
    },
    post: {
        method: "POST",
        headers: httpJsonHeader
    },
    put: {
        method: "PUT",
        headers: httpJsonHeader
    },
    patch: {
        method: "PATCH",
        headers: httpJsonHeader
    },
    delete: {
        method: "DELETE",
        headers: httpJsonHeader
    }
}

