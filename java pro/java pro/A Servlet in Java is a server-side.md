A \*\*Servlet\*\* in Java is a server-side program that handles requests and generates dynamic responses—typically for web applications. Think of it as a Java class that lives on a web server and responds to HTTP requests, like when someone submits a form or clicks a link.



Servlets are part of the \*\*Java EE (Jakarta EE)\*\* specification and run inside a \*\*Servlet container\*\* like Apache Tomcat. They’re more efficient than older technologies like CGI because they use threads instead of spawning new processes for each request.



---



\### 🔍 Servlet Lifecycle (Quick Overview)

\- `init()`: Called once when the servlet is first loaded.

\- `service()`: Called for each request (GET, POST, etc.).

\- `destroy()`: Called when the servlet is being taken out of service.



---



\### 📂 Types of Servlets in Java



Java Servlets are generally categorized into \*\*three types\*\* based on their usage and abstraction:



| Type              | Description                                                                 |

|-------------------|-----------------------------------------------------------------------------|

| \*\*GenericServlet\*\* | A protocol-independent base class. You override `service()` to handle requests. |

| \*\*HttpServlet\*\*    | Extends `GenericServlet` and is specific to HTTP. You override `doGet()`, `doPost()`, etc. |

| \*\*Servlet Interface\*\* | The root interface that all servlets implement. You can build custom servlets from scratch by implementing this. |



> Most real-world applications use `HttpServlet` because it’s tailored for web protocols like HTTP and HTTPS.



---





**JAVABEANS INTRODUCTION**



**-DEFINATION:**

.Reusable  Software component (Java class) with getters/setters.

-Characteristics:

1. Private fields
2. Public getters and setters
3. N0-arg constructor
4. Serializable(optional)





**useBean, setProperty, getProperty**



[jsp:useBean](jsp:useBean)





Creates/locates a bean.



Syntax: <jsp:useBean id="obj" class="beans.Student" scope="request" />



[jsp:setProperty](jsp:setProperty) Sets bean property.



Syntax: <jsp:setProperty name="obj" property="name" value="Raj" />



[jsp:getProperty](jsp:getProperty)



Retrieves bean property



**Example : Student Bean**

* Student.java(Bean):
* private String name;

private int age;

* public String getName () { return name; }
* public void setName (String n ) { this.name=n;}
* public int getAge() { return age;}
* public void setAge(int a) {this.age=a;}





**JSP WITH STUDENT BEAN**



JSP with Student Be

<jsp:useBean id="stud" class="beans.Student scope="request" />

<jsp:setProperty name="stud"

property="name" value="Rajashekar" />

<jsp:setProperty name="stud" property="age"

value="22" />



Output:



Student Name: <jsp:getProperty name="stud"

property="name" />

Student Ape: set Property

