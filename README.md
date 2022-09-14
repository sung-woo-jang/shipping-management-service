# weather-board-service API Server

<div align="center">
  <img src="https://img.shields.io/badge/node-16.17.0-339933?logo=node.js"> 
  <img src="https://img.shields.io/badge/NestJS-9.0.0-E0234E?logo=NestJS"> 
  <img src="https://img.shields.io/badge/TypeScript-4.4.5-3178C6?logo=typescript"> 
  <img src="https://img.shields.io/badge/MySQL-8.0.11-4479A1?logo=mysql"> 
  <img src="https://img.shields.io/badge/Swagger-6.1.0-DC382D?logo=swagger"> 
  <img src="https://img.shields.io/badge/TypeORM-0.3.9-010101"> 
</div>

## 소개

> 쇼핑몰 관리 페이지 API 입니다.

---

## 테스트 방법

```bash
$ npm i
$ npm start:dev
```

---

## 1. 서비스 개요

- 본 서비스는 쇼핑몰 관리자 페이지 서비스입니다.
- 주문내역을 주문자명으로 검색 또는 필터링하여 검색하는 기능이 제공됩니다.
- (예정) 해외 구매 고객을 위해 실시간 환율로 배송비 적용 API 구현 예정입니다..

## 2. 구현 사항

### 주문 관리

- 제품 주문 내역 열람
- 주문 내역 검색
- 주문 상태에 따른 필터
- 주문건에 대하여 발송 처리

### 쿠폰관리

- 할인쿠폰 발급
  - 배송비 할인 쿠폰
  - % 할인 쿠폰
  - 정액 할인 쿠폰

## 3. ERD

<img width="785" alt="스크린샷 2022-09-01 오후 10 44 18" src="https://user-images.githubusercontent.com/54757435/190148834-18f24ad5-d19d-4dcd-92fa-d4e9aef6efc4.png">
</br>

## 5. Swagger

- API를 테스트는 Swagger를 이용해 가능합니다.
- URL: localhost:3000/docs

# 참조문서

## 📌 [개발 컨벤션](https://www.notion.so/2-Convention-Code-8b023eef6eef4e679704a8e32c8ddf38)
