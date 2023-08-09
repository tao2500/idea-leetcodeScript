// 请求接口
import axios from "axios";

export const chatgpt = params => {
  return axios ({
    method: 'post',
    url: 'http://flag.smarttrot.com/index.php/api/v1/chat/completions',
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.data)
}
