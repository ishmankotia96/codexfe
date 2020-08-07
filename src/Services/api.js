import { BASE_URL } from '../config.js';

const FETCH_TIMEOUT = 30000;

const buildUrl = async (url, parameters) => {
  let qs = "";
  for (const key in parameters) {
    if (parameters.hasOwnProperty(key)) {
      const value = parameters[key];
      qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
    }
  }
  if (qs.length > 0) {
    qs = qs.substring(0, qs.length - 1); // chop off last "&"
    url = `${url}?${qs}`;
  }
  return url;
};

export const getData = async (api, method = "GET", params = "", token) => {
  // let token = await localStorage.getItem('token');
  console.log("service token", token);
  let url = await buildUrl(`${BASE_URL}${api}`, params);
  const response = await fetch(
    url,
    token == undefined || token.length > 0
      ? {
        method: `${method}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + token,
        },
      }
      : {
        method: `${method}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          // 'Authorization': 'Bearer ' + token
        },
      }
  );
  if (response) {
    return response;
  } else {
    return {};
  }
};

export const postData = async (
  api,
  method = "POST",
  payload,
  newtoken = ""
) => {
  let token = await localStorage.getItem("token");
  if (!token) {
    token = newtoken;
  }
  console.log("token post data ", token);
  let didTimeOut = false;
  let url = await buildUrl(`${BASE_URL}${api}`);
  console.log(`${BASE_URL}${api}`);
  return new Promise(function (resolve, reject) {
    const timeout = setTimeout(function () {
      didTimeOut = true;
      reject(new Error("Request Time Out"));
    }, FETCH_TIMEOUT);

    fetch(`${BASE_URL}${api}`, {
      method: `${method}`,
      headers:
        api == "login/do" || api == "user/signup"
          ? {
            Accept: "application/json",
            "Content-Type": "application/json",
          }
          : {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        // Clear the timeout as cleanup
        clearTimeout(timeout);
        if (!didTimeOut) {
          if (response) {
            return response.json();
          } else {
            reject(new Error("No data found"));
          }
        }
      })
      .then((formattedResponse) => {
        resolve(formattedResponse);
      })
      .catch((err) => {
        console.log("POST fetch failed! ", err);
        if (didTimeOut) return;
        reject(new Error("Something went wrong"));
      });
  })
    .then((formattedResponse) => {
      return formattedResponse;
    })
    .catch(function (err) {
      console.log({ status: { err_cd: err.message } });
      return { status: { err_cd: err.message } };
    });
};
