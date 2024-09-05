import {createTask as createTaskQuery, getTasks as getTasksQuery} from "../__mocks__/task"

export const createTask = (id = nanoid()) => {
  return {
    id,
    description: "",
    title: "",
    createdAt: "",
    updatedAt: "",
    status:""
  };
};
export const createGetTaskEmission = (id = "123") => {
  return {
    items: [createTask(id)],
    nextToken: ""
  };
};
test("Test get tasks", async () => {
  let resolveGetTasks;
  getTasksQuery.mockImplementation(() => {
    resolveGetTasks=createGetTaskEmission("title123");
    return resolveGetTasks;
  });
  let enterprise;
  enterprise = await getTasksQuery();
  expect(enterprise).toBe(resolveGetTasks);
});

test("Test create tasks", async () => {
  let resolveCreateTasks;
  let id = "123";
  createTaskQuery.mockImplementation(() => {
    return createTask(id);
  });
  let enterprise;
  enterprise = await createTaskQuery(id);
  expect(enterprise.id).toBe(id);
});