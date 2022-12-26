
import { Status } from '../../createTaskFrom/enums/Status'
import { TaskCounterStatusType } from '../TaskCounter'

export const emitCorrectSubtitle = (status: TaskCounterStatusType): string => {
    switch (status) {
        case Status.todo:
            return 'Todo';
        case Status.inProgress:
            return 'In Progress';
        case Status.completed:
            return 'Completed'
    }
}
