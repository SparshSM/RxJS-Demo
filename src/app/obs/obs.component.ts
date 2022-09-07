import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, count, debounce, debounceTime, distinct, elementAt, filter, first, from, fromEvent, interval, last, max, min, Observable, of, skip, take } from 'rxjs';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit {

  plist = ['abc', 'raj', 'dev','raj', 'dev']
  nlist=[12,65,89,46,15,7,98]
  plistobj = {
    id: 101,
    name: 'dev'
  }
  //fromEvent 
  @ViewChild('obswork')
  obswork!: ElementRef;
  //of
  person: Observable<string[]> = of(this.plist)
  person2: Observable<string> = of("dev")
  person3: Observable<any> = of(this.plistobj)
  //from
  person4$: Observable<string> = from(this.plist)
  person5$: Observable<number> = from(this.nlist)

  constructor() { }

  ngOnInit(): void {
    //behaviorsubject-state.
    let name$ = new BehaviorSubject('SM');
    name$.subscribe((val) => {
      console.log(val);

    })
    name$.next("ss")
    // let val= name$.getValue()
    // console.log(val);
    //Of operator make observable from string or array or object
    this.person.subscribe((val) => {
      console.log("of []", val)
    })
    this.person2.subscribe((val) => {
      console.log("of str", val)
    })
    this.person3.subscribe((val) => {
      console.log("of {}", val)
    })
    //From operator make observable from array, array like object,promise,iterable object,observable like object
    this.person4$.subscribe((val) => {
      console.log("from", val)
    })
    //interval create observable that emits sequential numbers every specified interval of time, on a specified schedulerlike
    this.person4$.subscribe((val) => {
      const val_int = interval(500);
      val_int.subscribe((n) => {
        // console.log("interval", val+n);
      })
    })
    //debouncetime emits a notification from the source only after a particular interval has passed without another source emission
        // this.from.get('name').valuechanges.pipe(debounceTime(3000).subscribe((val) => {
       //   console.log(val);

    //take emits only first count values emitted by source observable    eg: take 2 values
       // this.from.get('name').valuechanges.pipe(take(2),debounceTime(3000).subscribe((val) => {
       //   console.log(val);

    //takeWhile emits values emitted by source observable so long as each value satisfies given predicate
    // and then completes as soon as this predicate is not satisfied
        // this.from.get('name').valuechanges.pipe(takeWhile((v)=>this.checkCondition(v)),debounceTime(3000).subscribe((val) => {
       //   console.log(val);

    //takeLast waits to complete , then emits last N values from source as specified
       // this.from.get('name').valuechanges.pipe(takeLast(2),debounceTime(3000).subscribe((val) => {
       //   console.log(val);
    //first will give first value emitted by source  
       this.person4$.pipe(first()).subscribe((val) => {
        console.log("first", val);
    })
    //last will give first value emitted by source  
       this.person4$.pipe(last()).subscribe((val) => {
       console.log("last", val);
    })
    //elementAt will give single value from source observable based on index
      this.person4$.pipe(elementAt(1)).subscribe((val) => {
      console.log("eleAt", val);
    })
    //filter will give values from source observable based on predicate function given
        this.person4$.pipe(filter((v) => this.countval("sasasasasasasa"))).subscribe((val) => {
        console.log("filter",val);})
    //distinct gives all values from source observable that are distinct 
      this.person4$.pipe(distinct()).subscribe((val) => {
      console.log("distinct",val);})
  //skip will give back observable that will be skip first occurrence of count items
      this.person4$.pipe(skip(2)).subscribe((val) => {
       console.log("skip",val);})
    //count gives count of items from source observable
     this.person4$.pipe(count()).subscribe((val) => {
        console.log("count",val);})
    //min gives minimum of item from source observable items
  this.person5$.pipe(min()).subscribe((val) => {
    console.log("mini",val);})
    //max gives maximum of item from source observable items
  this.person5$.pipe(max()).subscribe((val) => {
    console.log("max",val);})

    }
    
  //FromEvent create observable that emits event of a specific type coming from given target 
  obsshow(){
      const btnons$ = fromEvent(this.obswork?.nativeElement, "click");
      btnons$.subscribe(val => { console.log(val) });
    }
    countval(n: string) {
      return n.length < 10 ? true : false;
    }
}
