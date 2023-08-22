<template>
     <div class="calendar">
        <div class="header">{{ currentMonth }}</div>
        <div class="days">
            <div class="day-name" v-for="dayName in dayNames" :key="dayName">{{ dayName }}</div>
            <div v-for="day in daysInMonth" :key="day" class="day">
                <div class="date">{{ day }}</div>
                <div class="events">
                    <div v-for="event in eventsOnDate(day)" :key="event.title" class="event">
                        <div class="event-title">{{ event.title }}</div>
                        <div class="event-course">{{ event.course }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Calendar',
    props: {
        year: Number,
        month: Number,
        events: Array,
    },
    computed: {
        currentMonth() {
            return new Date(this.year, this.month - 1).toLocaleDateString('default', {
                month: 'long',
                year: 'numeric',
            });
        },
        daysInMonth() {
            const totalDays = new Date(this.year, this.month, 0).getDate();
            return Array.from({ length: totalDays }, (_, index) => index + 1);
        },
        dayNames() {
            return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        },
    },
    methods: {
        eventsOnDate(day) {
            const date = new Date(this.year, this.month - 1, day).toISOString().split('T')[0];
            return this.events.filter(event => event.date === date).map(event => event.title);
        },
    },
};
</script>
  
<style scoped>
.calendar {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    border-radius: 5px;
    box-shadow: 8px 8px 8px 4px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    width: 100%;
    /* Adjust the width as needed */
    max-width: 1400px;
    padding: 30px;
}

.header {
    font-size: 1.8em;
    text-align: center;
    margin-bottom: 20px;
}

.days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
}

.day {
    border: 1px solid #ccc;
    padding: 15px;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
}

.date {
    font-weight: bold;
    margin-bottom: 5px;
}

.events {
    margin-top: 5px;
}

.event {
    background-color: #3498db;
    color: white;
    padding: 5px 10px;
    border-radius: 3px;
    margin: 2px 0;
    font-size: 0.9em;
}

.day-name {
    font-weight: bold;
    text-align: center;
}
</style>
