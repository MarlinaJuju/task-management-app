# task-management-app
## Description
<p>This is sample app for backend engineer assignment task from Moovd. Based on the requirement, it's include simple CRUD of model Task in GraphQL API and unit test.
Technologies used in this app:</p>
  <uL>
  <li> AWS Amplify for base app</li>
  <li> AWS Cognito for authentication</li>
  <li> Jest for unit tests</li>
  <li> AWS API Gateway for masking API url</li>
  </uL>
  
## Initialization

<ol>
  <li>
    <p>First clone project to local repository and open on source code editor (ex. Visual Studio Code).</p>
  </li>
  <li>
    <p>Install npm then run:</p>
    <code>npm install</code>
    <p>to install required library for the application</p>
  </li>
  <li>
    <p>For initialization run:</p>
    <code>amplify init</code>
    <p>Here is the screenshot of configuration to configure after runnning <code>amplify init</code></p>
    <img src="https://github.com/user-attachments/assets/832890d6-b0b2-4dcb-bc89-343eae293d32" alt="amplify init"/>
    <p>Access key and access key will be provided in email for safety purpose.</p>
  </li>
</ol>

## Amplify commands

Here are some Amplify commands that maybe helpful to go through the app:
<ul>
  <li>
    <code>amplify status</code>
    <p>to check current status of Amplify project</p>
  </li>
  <li>
    <code>amplify mock api</code>
    <p>to mock api into local endpoint for testing purposes</p>
  </li>
  <li>
    <code>amplify push</code>
    <p>to push changes made in code or Amplify CLI to cloud</p>
  </li>
</ul>

## Test

We use Jest for unit test that cover simulation of calling GraphQL API. Personally I don't have a confident in the unit test because I have problem when mocking Amplify API, so I try to make a dummy function instead.
You can find the dummy mock API in folder <code>__mocks___</code> and unit tests code in folder <code>__tests__</code>.

Use this command to run the unit tests:
<code>npm test</code>

## API Endpoint

Beside local mock API, the GraphQL API already publish on AWS AppSync and the endpoint url already masked in API Gateway.

Here is the AppSync API endpoint url:

<code>https://z2x6jkvtcnel5i4kyh3avqku3y.appsync-api.ap-southeast-2.amazonaws.com/graphql</code>

Here is the endpoint url from API Gateway:

<code>https://65pgi6m9me.execute-api.ap-southeast-2.amazonaws.com/dev/graphql</code>


## Authorization

This Amplify project already cover authorization using AWS Cognito with rules below:
<ul>
  <li>
    <code>Admin</code> : able to read, create, update, and delete task data.
  </li>
  <li>
    <code>Public</code> : able to read task data.
  </li>
</ul>

Admin group configure in AWS Cognito group with sample user. Let me know if you need another user created personally to test the authorization.

## Test GraphQL API in Postman

We can use Postman to test GraphQL API. There are two ways to test the GraphQL API; as <code>Admin</code> and public access.

### Test GraphQL API as public

<ol>
  <li>
    Open new tab for GraphQL in Postman, go to <code>Headers</code> tab and add key <code>x-api-key</code>.
    <img src="https://github.com/user-attachments/assets/b1b4d735-825a-4e54-9c43-d3b2db90f109" alt="public postman"/>
    For <code>x-api-key</code> value will be sent through email.
  </li>
  <li>
    Insert query at <code>Query</code> tab, then click <code>Query</code> button.
    <img src="https://github.com/user-attachments/assets/9a6803e1-d197-4f81-aa05-a500b14c4e5a" alt="public query"/>
  </li>
</ol>

### Test GraphQL API as Admin

<ol>
  <li>
    <p>Open new tab for GraphQL in Postman.</p
    <p>For Admin access we need to get authentication token as Cognito users.</p>
    <p>First, go to <code>Authorization</code> tab, choose <code>OAuth 2.0</code> for authorization type. The right tab will shown like this:</p>
    <img src="https://github.com/user-attachments/assets/6679d5cf-113a-4735-9837-fabf4ec283f7" alt="admin auth"/>
  </li>
  <li>
    At <code>Configure New Token</code> section, fill <code>Configure Options</code> form.
    <img src="https://github.com/user-attachments/assets/1a529b1e-cea2-4404-83b7-bfc1ad9d9d1e" alt="admin auth 2"/>
    Fill the form data as below:
    <ul>
      <li><b>Grant Type</b> : Authorization Code</li>
      <li><b>Callback URL</b> : https://google.com/</li>
      <li><b>Auth URL</b> : https://task-management-auth.auth.ap-southeast-2.amazoncognito.com/login</li>
      <li><b>Access Token URL</b> : https://task-management-auth.auth.ap-southeast-2.amazoncognito.com/oauth2/token</li>
      <li><b>Client ID</b> : 6b5gh84fcfoj7ha7792bpcbcea</li>
      <li><b>Client Secret</b> : [left empty]</li>
      <li><b>Scope</b> : openid</li>
      <li><b>State</b> : [left empty</li>
      <li><b>Client Authentication</b> : Send client credentials in body</li>
    </ul>
    Then click <code>Get New Access Token</code> button.
  </li>
  <li>
    There will be a new window shows login form. Fill the form with data below:
    <ul>
      <li><b>Username</b> : test-task-management</li>
      <li><b>Password</b> : test-task-management123</li>
    </ul>
    <img width="1440" alt="FDA6F9F8-29D3-4A0F-AB26-B348B66C7234" src="https://github.com/user-attachments/assets/69e35274-f4c6-46cb-bdc7-90938f1b6ca7">
    Click <code>Sign In</code> button.
  </li>
  <li>
    There will be a popup showing <b>Authentication Complete</b> like below.
    <img src="https://github.com/user-attachments/assets/0223309b-cd91-4359-b28f-62a7d3a54fec" alt="admin auth 2"/>
    Click <code>Proceed</code> button.
  </li>
  <li>
    There will show token data. Scroll to the <code>id token</code> field and copy the token.
    <img src="https://github.com/user-attachments/assets/1f1adb05-273c-4a7f-bcc6-60f4d3546398" alt="admin auth 2"/>
    <img src="https://github.com/user-attachments/assets/e2f9cdab-3ee0-4fd5-815b-af71d099bd9d" alt="admin auth 2"/>
  </li>
  <li>
    Now, go to <code>Headers</code> tab, add new key <code>Authorization</code>, paste <code>id token</code> value to the value field.
    <img src="https://github.com/user-attachments/assets/899f559d-ed3d-4435-9049-8a8f67639c2c" alt="admin auth 2"/>
  </li>
  <li>
    Insert query at <code>Query</code> tab, then click <code>Query</code> button.
    <img src="https://github.com/user-attachments/assets/1a1a938f-6318-4269-be2b-528749c078a6" alt="public query"/>
  </li>
</ol>

## GraphQL Query

Here are list of query that can be executed:

### Get Task

To get task by task id.
```
query MyQuery {
  getTask(id: "") {
    description
    createdAt
    id
    status
    title
    updatedAt
  }
}
```

### Get List Task

To get list of task include token for next batch and limit each get.
```
query MyQuery {
  listTasks {
    nextToken
    items {
      createdAt
      description
      id
      status
      title
      updatedAt
    }
  }
}
```

### Create Task (Admin only)

To create task, field title and status are mandatory. Only available for Admin.
```
mutation MyMutation {
  createTask(input: {description: "", status: "", title: ""}) {
    createdAt
    description
    id
    status
    title
    updatedAt
  }
}
```

### Update Task (Admin only)

To update task by id. Only available for Admin.
```
mutation MyMutation {
  updateTask(input: {id: "", title: "", status: "", description: ""}) {
    createdAt
    description
    id
    status
    title
    updatedAt
  }
}
```

### Delete Task (Admin only)

To delete task by id. Only available for Admin.
```
mutation MyMutation {
  deleteTask(input: {id: ""}) {
    createdAt
    description
    id
    status
    title
    updatedAt
  }
}
```
