import React from 'react';
import { Link } from 'react-router-dom';
import './NavAside.scss';

const NavAfterLog = () => {
  return (
    <header>
      <h2 className="aside-title">
        <span>이해인</span> "님"<p>나이스 투 미츄!</p>
      </h2>
      <ul>
        {AFTERLOG_ICON.map(after => {
          return (
            <li key={after.id}>
              <Link to={after.link}>
                <img src={after.imgSrc} alt={after.imgAlt} />
                {after.iconName}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default NavAfterLog;

const AFTERLOG_ICON = [
  {
    id: 1,
    imgSrc:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAXVBMVEUAAABAQEBAQEBAQEBFRUVERERDQ0NDQ0NCQkJFRUVCQkJERERERERERERERERDQ0NFRUVDQ0NFRUVDQ0NFRUVDQ0NERERERERERERERERDQ0NFRUVDQ0NEREREREQV3zYlAAAAHnRSTlMAECAwMEBQX2BgcHB/gI+QkJ+foKCvr7C/z9/f7+8m58WxAAACo0lEQVRYw+1Y2XqjIBgVEhhTNIamWgTj+z/mJGUREARMb+Ybz1WLevj3JVV14MCB/wMAETqK+QnBBoLeZcPsMTt4DPUbdI3HJiEo/E26HzQ7KHGc7iVlqeLgOidwBSV8cFy+nHqC4fNrwDwhC9SGwnzGkJYEqoMdjAtfb31Ty7Cp4L2U0fBxJ4zlKX3+deJFjEDz3RyzSwHn888rnXplzPGM9m8bEpupf1vt6zRfHeSrqDw1RtCMONeAbfAavpwoRpFSulH2i/jJUrEL3rwSUEkCwn6ydK6A9PVjW0Rq+XLBp1W+lkhBOSIuwRbmc2KvT4uobO/EK9B8k88I046Wd34H68QNrWRkTmyGMK2uNGVxrKoPbUfiWHFDZ/WCpS6d7STT0TyrJgAmz/M+iKux1QQYcPJDV2xpIpIwIVn3lC8/456U2EhAo4TMaACIXZ8tET4mq69ArM27GYWEUGFHnlsWIbceyVtFlDDYjW6eE00xXFBCyE6BYOC7CVkkImq+h3DqNkYjhzLhFGnoLjVoobt2eNwpMm05JThvLEB9IpnvicBPpVbGc3DxihO6oFhqxYvDou+fh9eGGjfTUsVhVT2E17BkSTWjHParUySZjZFPvs0vbjHoEybUV5oWAPxighwJVQvYmj2VzoNdrSa7w3y9wgo6LZJvxkHrdV/cte6EVVMCHINsVENLRJER2Lr7J0a6NnuqumaNInrAmJsUnxqCeHLmxHMWo+KbM9aLLodR891yRuIxuYmYLYZnVSXThsQ5kvJmqs9dA7g3IbhP+7mQz2mVA/a256Vf85JVitsbMkHn12oGMRmsjXIs2kgDzTfRrtPrBd+im3BVDNjG6VpQ7QG889+kk4r3k8fG8Bt0MoxJz+TPLCMl6F22AwcO/Bv4CzbnnOyepEdGAAAAAElFTkSuQmCC',
    imgAlt: '마이페이지',
    link: '#',
    iconName: '마이페이지',
  },
  {
    id: 2,
    imgSrc:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAXVBMVEUAAABAQEBCQkJAQEBAQEBFRUVERERDQ0NCQkJFRUVFRUVCQkJERERERERERERERERDQ0NFRUVDQ0NFRUVDQ0NFRUVDQ0NERERERERERERDQ0NFRUVDQ0NEREREREQlCp0aAAAAHnRSTlMAEB8gMDBAUGBgb3Bwf4CPkJCfn6Cgr6+/z9/f7+84+2oCAAABVElEQVRYw+2X2XqEIAyFtUxBO4xt7dgyLnn/x5wLcC1I4tKvFzl3Cv5sJwkmCYvFYrFOlzQdbJHJ/LwbbNbNx8tgh6QHaPYAjQe4hwfd0UAIAuneYODpwJTKSyNAKAUFJ8ouBgwEpl9vcR8CAJRY3teqsQ2Z+D5+8fA0X+qxXdPWC61344XS332sIw5bNA5W6jzcXTxsryIOvLrEFXOFJTazUQZN39oJ1vHCYgd+GbdqUmia0VLCvkG41k5R9Y8qkOtV8HSXugMAwFDIPubAwVE52mDrwE86cLHkyxwoyEv+tdnSNIOMXPaTUSDWDa5jbIrCoGOvcFEcNk6a6z671Qh7pa3b1h+t/KHcEZPDdWL41+Dpzr2xrgp7FamwCbYCVMbW+BJQxIEtsUjd4a/LKN9t/iHwwCtxezTw8N8KuQeYrQcmWYGLRrZt1a2RCYvFYrFO1xNWCZqH09S7xwAAAABJRU5ErkJggg==',
    imgAlt: '쿠폰함',
    link: '#',
    iconName: '쿠폰함',
  },
  {
    id: 3,
    imgSrc:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAS1BMVEUAAABAQEBAQEBAQEBFRUVERERDQ0NCQkJFRUVERERERERERERERERDQ0NFRUVDQ0NDQ0NDQ0NERERERERDQ0NFRUVDQ0NEREREREQes2e6AAAAGHRSTlMAECAwMEBQYG9wf4CPkJCfoK+/z9/f7++iVhWRAAABsUlEQVRYw+3Y23aDIBAF0EBKbCRtUkTk/7+0aYyRgQEG8aUt8xaCe3k5SwYPh1at/m+x01me2H5cP9l7TRe+J/dTY7+D9/7iHmRXyXWj9aqKFMoitZkEnLq5P0Q1dxf4lzNwLX3g/IqckNBbSXZx79mwHtptIp3gPauPkD3fxHmJdklC0t0cG41mhUtNzhB3cmwk4zc8fnA8dd3Kv+UUUiXA1yTN0bNRbys5vEYpoJsJrpCsHJ1BEgjIINEg91QQkDDRXrLIoJ1iibZlYCRmIWmIIJcmkmgDOMmIYDR+AuZ+nZ8FfVIEb8j5gRWAfqJ58MItBmF4LboCFIJ4VtwFpRgMSX1Kz8+CkDTn/HzChOWF+kjKHuCBz+OMOj8/oXS8gQ1s4B8D52Wyox4osqBaliQKuCxbQwKUkYYcAdeeLNXDMoP3+AHotF862bkLvPnyQNDYZ3ZVR9DjcwwEnM7v0rAe3wEBFy5b6FZABp3SCnZjKYf2/gsoBuePz5KPEF7z9bz9qmo/erOJqt8x13PxRn0zh5O6+rsIIP32a1OtSacHL/PAP3bl5gyZPblWrX5bfQPfQI/iovclZwAAAABJRU5ErkJggg==',
    imgAlt: '주문배송',
    link: '#',
    iconName: '주문배송',
  },
];
