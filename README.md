#### 项目脚手架 [kk-webcli](https://www.npmjs.com/package/kk-webcli) / egg-cli

### BaseUrl: http://39.105.108.226:7002
## 获取数字，字符串，数组，对象
```
methods: get, post
url: /number, /string, /array, /object
```
***
## 文件上传与获取

> 支持格式type: [docx, doc, jpg, png, mp4, xlsx, xls, zip, csv, txt]

**内置默认文件**
```
methods: get, post
url: /defaultFiles/test.[type]
```


**上传文件**
```
methods: post
url: /files

// resData
{ "file": 
  { 
  	"name": "test.docx",
  	"type": "application/octet-stream", 
  	"path": "http://39.105.108.226:7001/files/test.docx"
  } 
}
```

**下载文件**
```
methods: get, post
url: /files/[name].[type]  // 与上传文件名和后缀一致，也可以从上传成功后返回数据的path中获取
```
***
## file-saver下载文件 &nbsp; &nbsp;[npm包链接](https://www.npmjs.com/package/file-saver)
- [文件MIME类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
- post请求时，需在请求体中设置 responceType: 'blob' 
- 文中接口可以不设置new Blob中第二个参数Type  

**举例**
```
import { saveAs } from 'file-saver';

const name = 'test.csv';
const res = await postGetFile(name); // post请求获取文件二进制数据。
const blob = new Blob([res]);
saveAs(blob, name);

```
