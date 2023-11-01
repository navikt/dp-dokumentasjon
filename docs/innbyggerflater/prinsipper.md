# Prinsipper

## Introduksjon
Code is living. It is not something that one writes and forgets. Users want new features. Bugs need to be fixed. It should be easy to understand code that you have not seen before or it’s some time since you saw the code. This is why code quality is important. Programming is more about writing code that you and your co-workers can understand and less about showing how you can do cool stuff with your programming language. 

 

One difference between a smart programmer and a professional programmer is that the professional programmer understands that clarity is king.

Professionals use their powers for good and write code that others can understand.

How to measure code quality

 

 

 

 

Consider a building with a few broken windows. If the windows are not repaired, the tendency is for vandals to break a few more windows. Eventually, they may even break into the building, and if it's unoccupied, perhaps become squatters or light fires inside.

James Q. Wilson & George Kelling, 1982 - Broken windows theory 

 

 

Clean code
Clean code always looks like it was written by someone who cares.

Naming
The name of a variable, function, or class, should answer all the big questions. It should tell you why it exists, what it does, and how it is used.

If a name requires a comment, then the name does not reveal it's intent.

 

Call it for what it is
Bad


public String getOrgNr() {
  String[] split = description.split("-");
  
  return split[0].trim();
}
Good


public String getOrganisationNumberFromDescription() {
  String[] split = description.split("-");
  
  return split[0].trim();
}
 

Avoid abbreviations
Bad


NIDPPrincipal up = resolveUserPrincipal();
UserAuthority ua = nidpPrincipal.getAuthority();
Good


NIDPPrincipal nidpPrincipal = resolveUserPrincipal();
UserAuthority userAuthority = nidpPrincipal.getAuthority();
Naming and scope

Bad


class InvoiceService {

    public static long number = 123456789;
    
    ...
}
 

Good


for (int i = 0; i < 10; i++) {
    ...
}


class InvoiceService {

    public static long MAX_INVOICE_SUM = 123456789;
    
    ...
}
 

Try to make the code human-readable


if (arbeidsforholdIsEnded())

// or

if (isArbeidsforholdEnded())
 

Structure
Single Responsibility Principle
A class/method should only have one reason to be changed.

Single-responsibility principle 

Small pieces
Small classes and methods are easier to test, reuse and maintain. It is also easier to give proper names to small pieces of code. 

There are at least the following reasons to extract a code to a class or method:

Readability

Testing

Reuse

 

Size rules:

The first rule for classes is that they should be small.

The second rule of classes is that they should be smaller than that.

Package structure
The package structure should be organized by the features/business and not technical.

Example
Bad package structure

Better package structure

Component structure
This is work in progress!

Responsibility

Naming

Example

CRUD operations on data both in a database and in memory.

<descriptive name>Repository

SamlResponseRepository

A component that produces a model.

<descriptive name>Factory

SamlResponseFactory

A component that maps from one model to another.

<descriptive name>Mapper

PersonMapper

A component that handles business logic.

<descriptive name>Service

ClientService

A component that serves a endpoint.

<descriptive name>Controller

ClientController

A component that holds configruation.

<descriptive name>Config

LdapConfig

We need a drawing of how the components should relate.

Comments
Rule of thumb
Code comments are potential lies!

The rule of thumb is that comments should not be used. If you find yourself in a situation where you want to write a comment there is probably something wrong with your code.

Example
Bad code


// if salgsordregruppeDescription is empty
if (salgsordregruppeDescription == null || salgsordregruppeDescription.length() == 0) {
  return "";
}
Better code
 



...
if (isSalgsordregruppeDescriptionEmpty()) return "";
...

private boolean isSalgsordregruppeDescriptionEmpty() {
  return salgsordregruppeDescription == null 
    || salgsordregruppeDescription.length() == 0;
}
When comments are necessary
Comments are, at best, a necessary evil.

In some cases comments are necessary.  These are:

Explain why the solution is implemented this way
E.g. a workaround for a bug in an external dependency

Example


FakturagrunnlagResource invoice = invoiceFactory.createInvoice(claim);
// Visma Enterprise has an issue if more than one invoice is created with
// one second. Therefor we delay if necessary.
delayOrderSending.delayIfNecessary();
URI location = restUtil.post(invoiceEndpoint, invoice);
Open APIs
If we have open APIs such as:

Code as a shared library (Javadoc)

REST APIs (OpenAPI Specification (OAS))

it might be a good idea to have comments.

Example
OAS


@ApiModel
@Data
public final class Contact implements BasicLdapEntry {

    @ApiModelProperty(value = "DN of the contact. This is automatically set.")
    @Id
    private Name dn;

    @ApiModelProperty(value = "National Idenitification Number (NIN). This would be fodselsnummer (11 digits)")
    @Attribute(name = "cn")
    private String nin;

    @ApiModelProperty(value = "First name of the contact.")
    @Attribute(name = "givenName")
    private String firstName;

    @ApiModelProperty(value = "Last name of the contact.")
    @Attribute(name = "sn")
    private String lastName;
    
    ...
}
Javadocs
Java Documentation Tips and Tricks | JRebel by Perforce 

Testing
Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?

Why do we test? 
We test because:

Cheaper / faster to find the error early in the development process

Fast feedback

To be able to refactor

Documentation

Make it easier to handle complex problems

Faster development

Better code

The characteristics of good tests
A test is more a specification than a test. It should specify how something works.

Must be fast (usually milliseconds)

Slow tests will most often be integration tests

Divide the tests into unit and integration tests

A test must test a concept

The test should clean up after itself

Regardless of order

Keep the tests simple

Avoid using frameworks if possible (eg Spring)

The tests must always be run before the code is checked into the version control

How much of an application should be tested
It is not important to test 100% of the code. Actually how many % of the code is tested is irrelevant. The important thing is to test as much of the code so that you feel less stressed when deploying and refactoring the code. Code should also be in continuous development.

Things to test:

Logic

Mapping code

Controllers - the contract between the code and other systems

Code that needs extra documentation

Things not to test:

3. party libraries

If you end up mocking everything