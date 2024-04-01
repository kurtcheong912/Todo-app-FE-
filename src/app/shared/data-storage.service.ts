import { Injectable } from "@angular/core";
import { Task } from "../tasks/task.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";

const LOCALHOST: string =  'http://localhost:8080';
@Injectable({ providedIn: 'root' })
export class DataStorageService {

    constructor(private http: HttpClient) { }

    fetchTasks() {
        return this.http
            .get<Task[]>(LOCALHOST + '/tasks')
    }

    storeTask(task: Task) {
        return this.http.post<Task>(LOCALHOST + '/task', task);
    }

    putTask(task: Task) {
        return this.http.put(LOCALHOST + '/task/' + task.id, task);
    }

    removeTask(id: number) {
        return this.http.delete(LOCALHOST + '/task/' + id);
    }
}
