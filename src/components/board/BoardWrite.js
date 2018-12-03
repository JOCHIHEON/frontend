import React from "react";
import { Input } from "mdbreact";
import { Button, Card, CardHeader } from "mdbreact";
import { maindiv } from "mdbreact";

const BoardWrite = () => {
  return (
    <div id="boardmaindiv" style={maindiv}>
      <div id="boarddiv">
        <Card style={{ width: "1000px", marginTop: "1rem", height: "100px" }}>
          <CardHeader tag="h3">
            <Input label="제목을 입력해주세요." icon="pencil" />
          </CardHeader>
        </Card>
        <Card style={{ width: "1000px", height: "700px" }}>
          <textarea
            id="write"
            placeholder="글작성은 최대 3000자 까지 가능합니다."
          />
        </Card>
      </div>
      <div>
        <Button color="dark">글 작성</Button>
        <Button color="dark">취소</Button>
      </div>
    </div>
  );
};
export default BoardWrite;
