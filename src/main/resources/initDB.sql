CREATE SEQUENCE   "USER_ID_INCREMENT"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 5 NOORDER  NOCYCLE ;
/

CREATE table "USERS" (
    "USER_ID"    NUMBER,
    "UNAME"      VARCHAR2(30),
    "UPASSWORD"  VARCHAR2(32),
    constraint  "USERS_PK" primary key ("USER_ID")
)
/

CREATE trigger "BI_USERS"
  before insert on "USERS"
  for each row
begin
  if :NEW."USER_ID" is null then
    select "USER_ID_INCREMENT".nextval into :NEW."USER_ID" from dual;
  end if;
end;
/

alter table "USERS" add
constraint "USERS_UK1"
unique ("UNAME")
/