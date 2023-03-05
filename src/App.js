import "./App.css";
import Card from "./components/Card/card.component";
import Container from "./components/Container/container.component";
import Heading from "./components/Heading/heading.component";
import SubContainer from "./components/SubContainer/sub-container.component";
import CardBlock from "./components/CardBlock/card-block.component";
import InputText from "./components/InputText/input-text.component";
import CustomButton from "./components/CustomButton/custom-button.component";
import { useContext, useState } from "react";
import { TransactionContext } from "./transactionContext";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Close from "./components/Close/close.component";

function App() {
  let { transactions, addTransaction, deleteTransaction } = useContext(
    TransactionContext
  );

  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);

  const handleAddition = (e) => {
    e.preventDefault();
    if (newAmount === "0") {
      toast.error("0 is not allowed!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    addTransaction({ amount: newAmount, desc: newDesc });
    e.target.reset();
  };

  const handleDeletion = (e, val) => {
    e.preventDefault();
    deleteTransaction(val);
  };

  const getIncome = () => {
    let income = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0)
        income += Number.parseFloat(transactions[i].amount);
    }
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0)
        expense += Number.parseFloat(transactions[i].amount);
    }
    return Math.abs(expense);
  };

  return (
    <>
      <Container>
        <SubContainer>
          <Heading
            headVal="h1"
            headFont="Sansita Swashed"
            headColor="palevioletred"
            headPadStart="1"
            headPadEnd="1"
          >
            Expense Tracker App
          </Heading>
          <Heading
            headVal="h4"
            headJust="flex-start"
            headFont="Work Sans"
            headColor="yellowgreen"
            headSize="20"
            headPadEnd="0.1"
            headWeight="800"
            headPadLeft="px"
          >
            Your Balance
          </Heading>
          <Heading
            headVal="h4"
            headJust="flex-start"
            headFont="Work Sans"
            headColor="yellowgreen"
            headSize="20"
            headPadEnd="1.2"
            headWeight="900"
          >
            $ {getIncome() - getExpense()}
          </Heading>
          <Card headBg="white" cardPadEnd="1.2">
            <CardBlock
              cardPadStart="0.7"
              cardPadEnd="0.7"
              cardMar="10"
              cardFlexDir="column"
            >
              <Heading
                headWeight="bold"
                headColor="skyblue"
                headSize="19"
                headPadStart="0.8"
                headPadEnd="0.2"
              >
                INCOME
              </Heading>
              <Heading
                headWeight="bold"
                headColor="skyblue"
                headSize="18"
                headPadEnd="0.8"
              >
                $ {getIncome()}
              </Heading>
            </CardBlock>
            <CardBlock
              cardPadStart="0.7"
              cardPadEnd="0.7"
              cardMar="10"
              cardFlexDir="column"
            >
              <Heading
                headWeight="bold"
                headColor="pink"
                headSize="19"
                headPadStart="0.8"
                headPadEnd="0.2"
              >
                EXPENSE
              </Heading>
              <Heading
                headWeight="bold"
                headColor="pink"
                headSize="18"
                headPadEnd="0.8"
              >
                $ {getExpense()}
              </Heading>
            </CardBlock>
          </Card>
          <Heading
            headVal="h4"
            headJust="flex-start"
            headFont="Work Sans"
            headColor="yellowgreen"
            headSize="20"
            headPadEnd="1"
            headPadStart="0.4"
            headWeight="900"
            headPadLeft="15px"
          >
            History
          </Heading>
          {transactions.map((transaction) => {
            return (
              <Card
                key={transaction.id}
                headBg="white"
                cardPadEnd="0.4"
                cardBorder={`6px solid ${
                  transaction.amount < 0 ? "pink" : "lightblue"
                }`}
              >
                <Heading
                  headFont="Work Sans"
                  headPadStart="0.2"
                  headPadEnd="0.2"
                >
                  {transaction.desc}
                </Heading>
                <Heading
                  headFont="Work Sans"
                  headPadStart="0.2"
                  headPadEnd="0.2"
                >
                  {transaction.amount}
                </Heading>
                <Close
                  clSize="24"
                  clColor={`${transaction.amount > 0 ? "red" : "blue"}`}
                  onClick={(e) => handleDeletion(e, transaction.id)}
                />
              </Card>
            );
          })}
          <Heading
            headVal="h4"
            headJust="flex-start"
            headFont="Work Sans"
            headColor="yellowgreen"
            headSize="20"
            headPadEnd="0.5"
            headPadStart="1.2"
            headWeight="900"
            headPadLeft="15px"
          >
            Add New Transaction
          </Heading>
          <Heading
            headVal="h5"
            headJust="flex-start"
            headFont="Work Sans"
            headColor="lightgreen"
            headSize="20"
            headPadEnd="0.6"
            headWeight="900"
            headPadLeft="35px"
          >
            Text
          </Heading>
          <form onSubmit={handleAddition}>
            <InputText
              type="text"
              placeholder="Enter Text"
              onChange={(event) => setDesc(event.target.value)}
            />
            <Heading
              headVal="h5"
              headJust="flex-start"
              headFont="Work Sans"
              headColor="lightgreen"
              headSize="20"
              headPadStart="1"
              headWeight="900"
              headPadLeft="35px"
            >
              Amount
            </Heading>
            <Heading
              headVal="h6"
              headJust="flex-start"
              headFont="Work Sans"
              headColor="lightgreen"
              headSize="15"
              headPadEnd="0.6"
              headWeight="900"
              headPadLeft="35px"
            >
              (Negative - Expense | Positive - Income)
            </Heading>
            <InputText
              type="number"
              placeholder="Enter Amount"
              onChange={(event) => setAmount(event.target.value)}
            />
            <br />
            <CustomButton type="submit" value="Submit" color="65, 66, 163" />
            <ToastContainer />
          </form>
          <br />
          <br />
        </SubContainer>
      </Container>
    </>
  );
}

export default App;
