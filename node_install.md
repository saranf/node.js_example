# ubuntu 에 node 설치 

<strong> 테스트 환경 : ubuntu 18.04 </strong>

node를 설치하는 방법은 여러가지가 있습니다.


첫번째로 node 공식 홈페이지를 통해 설치 파일을 내려받고 설치하는 방법이 있습니다. 

https://nodejs.org/ko/
https://nodejs.org/ko/download/

두번째로  apt 관리자를 이용해서 설치한 이후, nvm 패키지를 이용해서 다른 버전을 설치해서 관리할 수 있습니다.



1. apt 관리자로 node 설치 
```
  -   sudo apt install node 

node를 apt 관리자로 설치 하게 되면 node 버전이 8.10 으로 설치가 됩니다.
지금 쓰는  2020.09.20 기준으로 node 최신 버전은 14.11 입니다. https://mjson.tistory.com/226
```

1-1 nvm 패키지를 이용해서 node 다른 버전 관리


<strong> NVM 은 Node Version Manager 의 줄임말로, 말 그대로 Node.js 의 버전관리를 쉽게 할 수 있도록 도와주는 툴입니다.</strong>


nvm 설치 부터 node 다른 버전 설치하기 

1) 관련 패키지 설치하기 
```
  -   sudo apt-get install build-essential libssl-dev
```

2) nvm 설치하기 
```
  -   curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
  
curl을 이용하여 nvm을 설치합니다. (command에 나온 버전은 0.33.11 버전입니다.)
```

3) bashrc 를 통해 적용 
```
  -   source ~/.bashrc

bashrc 를 업데이트 합니다.

bashrc란?
  .bashrc는 bash가 실행될 때마다 수행되고, bash_profile은 bash에 처음 login 할때 수행 됩니다.
  참고 블로그 : https://mjson.tistory.com/226
```

4) nvm 설치 확인 
```
  -   nvm --version 
```

5) nvm 을 이용하여 node.js 설치하기 
```
  -   nvm install 14.11 
```
