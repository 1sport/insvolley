const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://api.insvolley.kz/api'
export const API_URL_MEDIA = process.env.NEXT_PUBLIC_URL_MEDIA || 'https://api.insvolley.kz'

class Api {
  private url;

  constructor(url: string) {
    this.url = url;
  }

  get(
    module: string,
    init?: RequestInit,
    queryParams?: { [key: string]: any },
  ) {
    if (queryParams) {
      module = `${module}?${new URLSearchParams(
        parseToParamsObject(queryParams),
      ).toString()}`;
    }

    return this.request(module, {
      ...(init || {}),
      method: "GET",
    });
  }

  post(
    module: string,
    data: any,
    init?: RequestInit,
    queryParams?: { [key: string]: any },
  ) {
    if (queryParams) {
      module = `${module}?${new URLSearchParams(
        parseToParamsObject(queryParams),
      ).toString()}`;
    }
    return this.request(module, {
      ...(init || {}),
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  put(module: string, data: any, init?: RequestInit) {
    return this.request(module, {
      ...init,
      method: "PUT",
      body: JSON.stringify(data),
    });
  }
  patch(module: string, data: any, init?: RequestInit) {
    return this.request(module, {
      ...init,
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }
  delete(module: string, init?: RequestInit) {
    return this.request(module, {
      ...init,
      method: "DELETE",
    });
  }

  private async request(module: string, init?: RequestInit): Promise<any> {
    return fetch(this.url + module, this.getFetchConfig(init)).then(
      async (res) => {
        const isJson = res.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson ? await res.json() : null;
        if (data?.error) {
          return Promise.reject(data);
        }

        return data;
      },
    );
  }

  private getFetchConfig(init?: RequestInit) {
    init = {
      ...init,
      headers: {
        ...init?.headers,
        "Content-Type": "application/json",
      },
    };
    return init;
  }
}

const parseToParamsObject = (object: {
  [key: string]: any;
}): { [key: string]: string } => {
  const newObject: { [key: string]: string } = {};

  Object.entries(object).map(([key, value]) => {
    if (value) {
      if (typeof value === "boolean") {
        newObject[key] = value ? "true" : "false";
      } else {
        newObject[key] = value;
      }
    }
  });

  return newObject;
};

export const instance = {
  strapi: new Api(STRAPI_API_URL),
};
