/**
 * The Subject interface declares a set of methods for managing subscribers.
 */
 interface SubjectGuru {
    // Attach an observer to the subject.
    attach(observer: ObserverGuru): void;

    // Detach an observer from the subject.
    detach(observer: ObserverGuru): void;

    // Notify all observers about an event.
    notify(): void;
}

/**
 * The Subject owns some important state and notifies observers when the state
 * changes.
 */
class ConcreteSubject implements SubjectGuru {
    /**
     * @type {number} For the sake of simplicity, the Subject's state, essential
     * to all subscribers, is stored in this variable.
     */
    public state: number;

    /**
     * @type {ObserverGuru[]} List of subscribers. In real life, the list of
     * subscribers can be stored more comprehensively (categorized by event
     * type, etc.).
     */
    private observers: ObserverGuru[] = [];

    /**
     * The subscription management methods.
     */
    public attach(observer: ObserverGuru): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: ObserverGuru): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    /**
     * Trigger an update in each subscriber.
     */
    public notify(): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    /**
     * Usually, the subscription logic is only a fraction of what a Subject can
     * really do. Subjects commonly hold some important business logic, that
     * triggers a notification method whenever something important is about to
     * happen (or after it).
     */
    public someBusinessLogic(): void {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}

/**
 * The Observer interface declares the update method, used by subjects.
 */
interface ObserverGuru {
    // Receive update from subject.
    update(subject: SubjectGuru): void;
}

/**
 * Concrete Observers react to the updates issued by the Subject they had been
 * attached to.
 */
class ConcreteObserverA implements ObserverGuru {
    public update(subject: SubjectGuru): void {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}

class ConcreteObserverB implements ObserverGuru {
    public update(subject: SubjectGuru): void {
        if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}

/**
 * The client code.
 */

const subjectGuru = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
subjectGuru.attach(observer1);

const observer2 = new ConcreteObserverB();
subjectGuru.attach(observer2);
subjectGuru.someBusinessLogic();
subjectGuru.someBusinessLogic();
subjectGuru.detach(observer2);
subjectGuru.someBusinessLogic();