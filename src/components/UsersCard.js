import React from "react";
import "../css/UserCard.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

const users = [
  {
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
    name: "sabrine ben alaya",
    profission: "Programmer",
    workplace: "GoMyCode",
    Wallets_Balance: 12355,
    Followers: 1255,
    Total_Transactions: 1523,
  },
  {
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp",
    name: "Rekaya ben alaya",
    profission: "Loyer",
    workplace: "Teleperformance",
    Wallets_Balance: 12355,
    Followers: 1255,
    Total_Transactions: 1523,
  },
  {
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp",
    name: "Hachemi ben alaya",
    profission: "Driver",
    workplace: "Saba",
    Wallets_Balance: 12355,
    Followers: 1255,
    Total_Transactions: 1523,
  },
  {
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
    name: "Amel ben alaya",
    profission: "Performer",
    workplace: "Hollywood",
    Wallets_Balance: 12355,
    Followers: 1255,
    Total_Transactions: 1523,
  },
];
function UsersCard() {
  return (
    <div className="UsersProfil">
      {users.map((el) => (
        <MDBContainer className=" py-5 h-100">
         
            <MDBCard style={{ borderRadius: "15px", width:"300px" }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage
                    src={el.image}
                    className="rounded-circle"
                    fluid
                    style={{ width: "100px" }}
                  />
                </div>
                <MDBTypography tag="h4">{el.name}</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  {el.profission} <span className="mx-2">|</span>{" "}
                  <a href="#!">{el.workplace}</a>
                </MDBCardText>
                <div className="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="facebook" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating className="mx-1">
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="skype" size="lg" />
                  </MDBBtn>
                </div>
                <MDBBtn rounded size="lg">
                  Message now
                </MDBBtn>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">
                      {el.Wallets_Balance}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Wallets Balance
                    </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">
                      {el.Followers}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Followers
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">
                      {el.Total_Transactions}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Total Transactions
                    </MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
        
        </MDBContainer>
      ))}
    </div>
  );
}

export default UsersCard;
