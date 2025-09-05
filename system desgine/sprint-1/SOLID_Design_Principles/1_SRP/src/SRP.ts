// Single Responsibility Principle  :
// one class for only one purpuse or one job . Doesn't contains more than one tasks or jobs.

// Problem: You are given the following class:

// class TaskManager {
//   createTask(name: string) {
//     console.log(`Creating task: ${name}`);
//   }

//   sendEmail(to: string) {
//     console.log(`Sending email to ${to}`);
//   }
// }
// Task: Refactor the code to follow the Single Responsibility Principle.

// Solution :
/// SRP : one class -> one Task ....
class CreateTask {
  newTask(name: string) {
    console.log(`Creating new task : ${name}`);
  }
}

class SendEmail {
  emailSend(to: string) {
    console.log(`Sending email to : ${to}`);
  }
}

let createTask1 = new CreateTask();
createTask1.newTask("Learning OOPS");

let sendEmail1 = new SendEmail();
sendEmail1.emailSend("aswartha3@gmail.com");
