## 📑 ToDo-List 만들기

### 💜 개요
+ Input Box에 할일 입력 후 추가 버튼 클릭
  + 화면에 리스트 형태로 할일이 쌓임
  + 완료 시 할일 클릭하면 취소선, 다시 클릭하면 취소선 삭제
+ 리스트에 수정 아이콘 클릭
  + Input Box에서 리스트 내용 수정반영
+ 리스트에 삭제 아이콘 클릭
  + 리스트에서 내용 삭제
<br />

### 💜 진행상황
+ [x] 컴포넌트 분리 (TodoBoard / TodoItem)
+ [ ] 입력하기 기능
  + [x] 목록에 추가하기(최신입력이 제일 위로 가도록)
  + [x] 목록 클릭 시 완료/완료취소 표시하기(취소선으로 구분)
  + [ ] 텍스트 빈칸으로 입력 시 alert 띄우기
  + [ ] (옵션) 완료목록 리스트 별도 관리
+ [ ] 삭제하기 기능
  + [ ] 삭제 아이콘 클릭 시 리스트에서 삭제
  + [ ] 삭제 아이콘 클릭 시 alert 띄우기
+ [ ] 수정하기 기능
  + [ ] 수정 아이콘 클릭 시 리스트 아이템 수정
  + [ ] 수정/수정취소
+ [ ] CSS 수정하기
+ [ ] firebase 호스팅하기
<br />

### 💜 작업환경
+ VisualStudioCode ver.1.77
+ React ver.18.2.0
```javascript
npm install @mui/material @emotion/react @emotion/styled
```
<br />

### 💜 참고자료
+ https://youtu.be/TjUju3aUIDM
+ https://youtu.be/TmDNBEdHzVs
+ https://docs.google.com/document/d/1wkJLct-nTvNGoOGexvG_v8y-vdNzEPXTPi_y04OAFPM/edit
