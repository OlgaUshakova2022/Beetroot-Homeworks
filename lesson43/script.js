
class User {
    constructor({name, role}) {
      if (!name || !role) {
        alert("Необхідно вказати ім'я та роль користувача!");
      } else if (role !== "admin" && role !== "user") {
        alert("Роль користувача може бути або 'admin', або 'user'!");
      } else {
        this.name = name;
        this.role = role;
      }
    }
  
    getName() {
      return this.name;
    }
  
    getRole() {
      return this.role;
    }
  
    login() {
      console.log(`${this.name} залогінився`);
    }
  
    logout() {
      console.log(`${this.name} вийшов з системи`);
    }
  
    changeName(newName) {
      if (!newName) {
        alert("Необхідно вказати нове ім'я користувача!");
      } else {
        console.log(`Змінено ім'я користувача ${this.name} на ${newName}`);
        this.name = newName;
      }
    }
  
    changePassword(newPassword) {
      if (!newPassword) {
        alert("Необхідно вказати новий пароль користувача!");
      } else {
        console.log(`Змінено пароль користувача ${this.name}`);
      }
    }
  }
  
 
  class Admin extends User {
    constructor({name, role}) {
      super({name, role}); 
    }
  
    addUser(user) {
      console.log(`Додано користувача ${user.getName()}`);
    }
  
    removeUser(user) {
      console.log(`Видалено користувача ${user.getName()}`);
    }
  
    changeUserRole(user, newRole) {
      if (!newRole || (newRole !== "admin" && newRole !== "user")) {
        alert("Роль користувача може бути або 'admin', або 'user'!");
      } else {
        console.log(`Змінено роль користувача ${user.getName()} на ${newRole}`);
        user.role = newRole;
      }
    }
  
    getAllUsers() {
      console.log("Список користувачів:");
    }
  
    removeAllUsers() {
      console.log("Видалено всіх користувачів");
    }
  }
  

  const user1 = new User({name: "Ivan", role: "user"});
  

  console.log(user1.getName()); 

  


  
  